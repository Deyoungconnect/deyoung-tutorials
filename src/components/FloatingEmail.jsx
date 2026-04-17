const FloatingEmail = () => {
  const emailAddress = "deyoungtutorials@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}?subject=Inquiry about Tutoring Services&body=Hello, I'm interested in your tutoring services for my child. Please get back to me.`;
  };

  return (
    <button
      onClick={handleEmailClick}
      className="fixed bottom-6 right-24 z-50 bg-deyoung-terracotta hover:bg-opacity-90 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="Send Email"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-6 h-6 fill-current"
      >
        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
      </svg>
    </button>
  );
};

export default FloatingEmail;