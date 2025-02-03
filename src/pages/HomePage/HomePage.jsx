const HomePage = () => {
  const imgUrl = new URL(
    "/src/assets/free-icon-phone-max.png",
    import.meta.url
  );
  return (
    <div
      className="flex items-center gap-6 justify-center "
      style={{
        height: "80vh",
      }}
    >
      <h1 className="text-4xl sm:text-6xl">Phonebook</h1>
      <img className="w-12 sm:w-16 " src={imgUrl} alt="Phone picture" />
    </div>
  );
};

export default HomePage;
