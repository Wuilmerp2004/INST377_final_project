
// Workout of the Day Javascript
const weeklyWorkouts = {
    0: "🧘 Sunday Stretch & Recovery",             
    1: "🏋️ Push Day – Chest, Shoulders, Triceps", 
    2: "🏃 Cardio and Abs",                  
    3: "💪 Pull Day – Back & Biceps",              
    4: "🦵 Lower Body Strength – Quad and Glute Focused",  
    5: "Upper Day- Chest,Shoulders,Triceps,Back, Biceps",                  
    6: "Cardio and Abs"           
  };
  
  
  const today = new Date().getDay();
  const workoutText = weeklyWorkouts[today];
  
  
  const wrapper = document.getElementById('daily-workout-wrapper');
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.textContent = workoutText;
  wrapper.appendChild(slide);
  
  
  new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
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
