<?php
// Simple password protection
$correct_password = "Ogochukwu@88"; // Change this!

if (!isset($_SERVER['PHP_AUTH_USER']) || $_SERVER['PHP_AUTH_PW'] != $correct_password) {
    header('WWW-Authenticate: Basic realm="Admin Area"');
    header('HTTP/1.0 401 Unauthorized');
    echo 'Access denied';
    exit;
}

require_once 'config.php';

// Fetch all inquiries
$stmt = $pdo->query("SELECT * FROM inquiries ORDER BY created_at DESC");
$inquiries = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin - Deyoung Tutorials Inquiries</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f5efe7;
            padding: 20px;
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        
        .header {
            background: #1e2c3a;
            color: white;
            padding: 20px 30px;
            border-bottom: 4px solid #c44536;
        }
        
        .header h1 {
            font-size: 24px;
            margin-bottom: 5px;
        }
        
        .header p {
            color: #a0aec0;
            font-size: 14px;
        }
        
        .stats {
            background: #f5efe7;
            padding: 15px 30px;
            border-bottom: 1px solid #e2e8f0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .stats .count {
            font-weight: bold;
            color: #1e2c3a;
        }
        
        .stats .count span {
            background: #c44536;
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            margin-left: 8px;
        }
        
        .refresh-btn {
            background: #1e2c3a;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            transition: background 0.3s;
        }
        
        .refresh-btn:hover {
            background: #2d3a42;
        }
        
        .table-wrapper {
            overflow-x: auto;
            padding: 0 20px 20px 20px;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
        }
        
        th {
            background: #f5efe7;
            color: #1e2c3a;
            padding: 14px 12px;
            text-align: left;
            font-weight: 600;
            border-bottom: 2px solid #c44536;
        }
        
        td {
            padding: 12px;
            border-bottom: 1px solid #e2e8f0;
            vertical-align: top;
        }
        
        tr:hover {
            background: #fef9f5;
        }
        
        .message-preview {
            max-width: 250px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .delete-btn {
            background: #c44536;
            color: white;
            border: none;
            padding: 6px 14px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
            transition: background 0.3s;
        }
        
        .delete-btn:hover {
            background: #a03428;
        }
        
        .empty-state {
            text-align: center;
            padding: 60px 20px;
            color: #5f6c72;
        }
        
        .empty-state h3 {
            font-size: 20px;
            margin-bottom: 10px;
            color: #1e2c3a;
        }
        
        .footer {
            background: #f5efe7;
            padding: 15px 30px;
            text-align: center;
            font-size: 12px;
            color: #5f6c72;
            border-top: 1px solid #e2e8f0;
        }
        
        @media (max-width: 768px) {
            .header h1 { font-size: 18px; }
            .stats { flex-direction: column; align-items: flex-start; }
            th, td { font-size: 12px; padding: 8px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📋 Deyoung Tutorials - Contact Inquiries</h1>
            <p>View and manage all form submissions from your portfolio</p>
        </div>
        
        <div class="stats">
            <div class="count">
                Total Submissions: <span><?php echo count($inquiries); ?></span>
            </div>
            <div>
                <button class="refresh-btn" onclick="window.location.reload()">⟳ Refresh</button>
            </div>
        </div>
        
        <div class="table-wrapper">
            <?php if (count($inquiries) > 0): ?>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location/Level</th>
                            <th>Message</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($inquiries as $row): ?>
                            <tr>
                                <td><?php echo $row['id']; ?></td>
                                <td><strong><?php echo htmlspecialchars($row['name']); ?></strong></td>
                                <td><?php echo htmlspecialchars($row['email']); ?></td>
                                <td><?php echo htmlspecialchars($row['phone']); ?></td>
                                <td><?php echo htmlspecialchars($row['subject']); ?></td>
                                <td class="message-preview" title="<?php echo htmlspecialchars($row['message']); ?>">
                                    <?php echo htmlspecialchars(substr($row['message'], 0, 80)); ?>
                                    <?php echo strlen($row['message']) > 80 ? '...' : ''; ?>
                                </td>
                                <td><?php echo date('M j, Y g:i A', strtotime($row['created_at'])); ?></td>
                                <td>
                                    <a href="delete.php?id=<?php echo $row['id']; ?>" onclick="return confirm('⚠️ Delete this inquiry from <?php echo addslashes($row['name']); ?>? This cannot be undone.');">
                                        <button class="delete-btn">Delete</button>
                                    </a>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            <?php else: ?>
                <div class="empty-state">
                    <h3>📭 No inquiries yet</h3>
                    <p>When someone submits the contact form on your portfolio, it will appear here.</p>
                </div>
            <?php endif; ?>
        </div>
        
        <div class="footer">
            <p>🔒 Protected Area | Deyoung Tutorials Admin Panel | <a href="http://localhost:5173" target="_blank">Visit Portfolio</a></p>
        </div>
    </div>
</body>
</html>