// Workout of the Day JavaScript
const weeklyWorkouts = {
    0: "Sunday:Stretch & Recovery",
    1: "Monday:Push Day – Chest, Shoulders, Triceps",
    2: "Tuesday:Cardio and Abs",
    3: "Wednesday:Pull Day – Back & Biceps",
    4: "Thursday:Lower Body Strength – Quad and Glute Focused",
    5: "Friday:Upper Day – Chest, Shoulders, Triceps, Back, Biceps",
    6: "Saturday:Cardio and Abs"
  };
  
  const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const today = new Date().getDay();
  
  const wrapper = document.getElementById('daily-workout-wrapper');
  
  for (let i = 0; i < 7; i++) {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
  
    const image = document.createElement('img');
    image.src = `${dayNames[i]}.png`;
    image.alt = `${dayNames[i]} workout`;
  
    const text = document.createElement('p');
    text.textContent = weeklyWorkouts[i];
  
    slide.appendChild(image);
    slide.appendChild(text);
    wrapper.appendChild(slide);
  }
  
  // Initialize Swiper
  const swiper = new Swiper('.swiper', {
    initialSlide: today,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  

///Quote of the day 
const apiKey = "fZmCIKykW42pmYmbRR9rkg==E9Px6nAxmV3XgMt5";
  const quoteBlock = document.getElementById('quoteBlock');

  fetch('https://api.api-ninjas.com/v1/quotes', {
    method: 'GET',
    headers: { 'X-Api-Key': apiKey }
  })
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(data => {
    if (data.length > 0) {
      const quote = data[0];
      quoteBlock.textContent = `"${quote.quote}" — ${quote.author}`;
    } else {
      quoteBlock.textContent = 'No quotes found.';
    }
  })
  .catch(error => {
    quoteBlock.textContent = 'Failed to load quote.';
    console.error('Error fetching quote:', error);
  });
