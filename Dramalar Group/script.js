const movies = [
    { title: "Squid Game", img: "https://via.placeholder.com/300x400?text=Squid+Game" },
    { title: "The Glory", img: "https://via.placeholder.com/300x400?text=The+Glory" },
    { title: "Vincenzo", img: "https://via.placeholder.com/300x400?text=Vincenzo" },
    { title: "True Beauty", img: "https://via.placeholder.com/300x400?text=True+Beauty" }
  ];
  
  const movieList = document.getElementById("movieList");
  const search = document.getElementById("search");
  
  /* Kinolarni chiqarish */
  function displayMovies(list) {
    movieList.innerHTML = "";
  
    list.forEach(movie => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      card.innerHTML = `
        <img src="${movie.img}" alt="${movie.title}">
        <h3>${movie.title}</h3>
      `;
  
      card.addEventListener("click", () => {
        alert(movie.title + " sahifasi keyin qo‘shiladi");
      });
  
      movieList.appendChild(card);
    });
  }
  
  /* Boshlanish */
  displayMovies(movies);
  
  /* Qidiruv */
  search.addEventListener("input", () => {
    const value = search.value.toLowerCase();
  
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(value)
    );
  
    displayMovies(filtered);
  });