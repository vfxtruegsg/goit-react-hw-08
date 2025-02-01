const NotFound = () => {
  return (
    <div className="flex flex-col gap-12 items-center justify-center h-screen">
      <h2 className="max-w-3xs">Something went wrong...</h2>
      <img src="/src/assets/close.png" alt="Error img" />
    </div>
  );
};

export default NotFound;
