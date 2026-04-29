// 1. KINO BAZASI (Videolarni shu yerga qo'shasiz)
const movieData = [
  {
      id: 1,
      title: "Vagabond (Sargardon)",
      category: "Drama",
      img: "https://m.media-amazon.com/images/M/MV5BMzY1MTU0NTE2N15BMl5BanBnXkFtZTgwNjY5NjM0NzM@._V1_.jpg",
      episodes: [
          "https://t.me/mominovabu/6?embed=1", // Telegram video misoli
          "https://www.youtube.com/embed/pS_v8t2I8z8" // YouTube video misoli
      ]
  },
  {
      id: 2,
      title: "Qonxo'r Gumiho",
      category: "Drama",
      img: "https://m.media-amazon.com/images/M/MV5BMzYxYmU3M2EtYmZjZC00MzZmLTlmZDEtM2Y4YmY0N2E2YjU5XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
      episodes: ["https://www.youtube.com/embed/Oia-S0iS8Y4"]
  },
  {
      id: 3,
      title: "Forsaj 10",
      category: "Kino",
      img: "https://m.media-amazon.com/images/M/MV5BMzYxYmU3M2EtYmZjZC00MzZmLTlmZDEtM2Y4YmY0N2E2YjU5XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
      episodes: ["https://www.youtube.com/embed/32RAq6JzY-w"]
  }
];

// O'zgaruvchilarni ushlash
const movieGrid = document.getElementById('movieGrid');
const modal = document.getElementById('playerModal');
const iframe = document.getElementById('videoIframe');
const searchInput = document.getElementById('searchInput');

// KINOLARNI CHIQARISH
function displayMovies(movies) {
  movieGrid.innerHTML = "";
  movies.forEach(movie => {
      const card = `
          <div class="movie-card" onclick="openPlayer(${movie.id})">
              <img src="${movie.img}" alt="${movie.title}">
              <div class="movie-info">
                  <h4>${movie.title}</h4>
                  <p style="color:gray; font-size:12px;">${movie.category}</p>
              </div>
          </div>`;
      movieGrid.insertAdjacentHTML('beforeend', card);
  });
}

// PLEYERNI OCHISH
function openPlayer(id) {
  const movie = movieData.find(m => m.id === id);
  document.getElementById('currentMovieTitle').innerText = movie.title;
  iframe.src = movie.episodes[0]; // 1-qismni yuklash
  
  // Qismlarni hosil qilish
  const epList = document.getElementById('episodeList');
  epList.innerHTML = movie.episodes.map((link, i) => 
      <button class="ep-btn ${i===0?'active':''}" onclick="changeVideo('${link}', this)">${i+1}-qism</button>
  ).join('');

  modal.style.display = 'block';
}

// QISMNI ALMASHTIRISH
function changeVideo(link, btn) {
  iframe.src = link;
  document.querySelectorAll('.ep-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// YOPISH
document.getElementById('closeBtn').onclick = () => {
  modal.style.display = 'none';
  iframe.src = "";
};

// QIDIRUV
searchInput.oninput = (e) => {
  const val = e.target.value.toLowerCase();
  const filtered = movieData.filter(m => m.title.toLowerCase().includes(val));
  displayMovies(filtered);
};

// BOSHIDAN CHIQARISH

displayMovies(movieData);
function displayMovies(movies) {
  const movieGrid = document.getElementById('movieGrid');
  movieGrid.innerHTML = ""; // Oldin ichini tozalaymiz
  
  movies.forEach(movie => {
      const card = document.createElement('div');
      card.className = 'movie-card';
      card.onclick = () => openPlayer(movie.id);
      card.innerHTML = `
          <img src="${movie.img}" alt="${movie.title}">
          <div class="movie-info">
              <h4>${movie.title}</h4>
              <p style="color:gray; font-size:12px;">${movie.category}</p>
          </div>
      `;
      movieGrid.appendChild(card);
  });
}