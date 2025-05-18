Developer Manual – TerpFit
Welcome to the TerpFit Developer Manual. This guide will walk future developers through setting up the system, running it locally, understanding the APIs used, and continuing development with a roadmap.

Installation: 
1. Clone the Repository: 
git clone https://github.com/Wuilmerp2004/INST377_final_project.git
cd INST377_final_project
2. Install Dependencies
Make sure Node.js is installed

This project uses:
@supabase/supabase-js – for backend data storage
    
Running the App: 
Running the App uses HTML, CSS, JavaScript
You can launch it in a browser or use a simple local server.

Option 1: Using serve
bash
CopyEdit
npx serve 

Option 2: Using live-server
bash
CopyEdit
npm install -g live-server
live-server

API Documentation
1. 🏋️‍♂️ API Ninjas – Exercise Lookup
        Endpoint: https://api.api-ninjas.com/v1/exercises
        Method: GET
        Query Param: muscle (e.g., biceps, glutes)
       Headers: X-Api-Key: <your_api_key>
       Used In: muscle.html
       Purpose: Fetches up to 10 exercises for the selected muscle group

2. Nutritionix – Food Search
       Endpoint: https://trackapi.nutritionix.com/v2/natural/nutrients
       Method: POST
       Headers:

x-app-id: <your_app_id>
       x-app-key: <your_app_key>
        Content-Type: application/json
   
       Request Body Example:

{
          "query": "2 eggs and a banana"
        }
       
        Used In: nutrition.html
        Purpose: Retrieves calorie, protein, fat, and carb data for user-inputted food

3. 🗃 Supabase – Save Favorite Foods
        Endpoint: https://bvcmvxdwhvinihzhrdkn.supabase.co/rest/v1/nutrition_favorite
        Method: POST
        Headers:

        Request Body Example:
{
          "food_name": "banana",
          "calories": 105,
         "protein": 1.3,
         "fat": 0.3,
          "carbs": 27,
          "quantity": "1 medium"
        }      
        Used In: nutrition.html
       Purpose: Saves user’s food search results to the Supabase database

4. 💬 API Ninjas – Quote of the Day
       Endpoint: https://api.api-ninjas.com/v1/quotes
        Method: GET
        Headers:

X-Api-Key: fZmCIKykW42pmYmbRR9rkg==E9Px6nAxmV3XgMt5
        
        Response Example:
[
          {
            "quote": "Push yourself, because no one else is going to do it for you.",    
         }
        
        Used In: home.html (via home.js)
        Purpose: Displays a random motivational quote daily on the homepage

🐞 Known Bugs
Issue
Workaround
muscle.html
Some muscles may return no exercises
Gracefully displays fallback msg
nutrition.html
No visual confirmation when saving

🛣 Roadmap for Future Development
         Implement user authentication via Supabase
         Build a “Favorites” dashboard to view saved meals
         Visualize user macro progress (e.g. bar graph)
         Include workout streak/calendar feature

📁 Project Structure
├── about.html
├── home.html
├── workouts.html
├── muscle.html
├── nutrition.html
├── home.js
├── package.json
├── package-lock.json
│   ├── terpfit.png
│   ├── chris.JPEG
│   ├── wuilmer.JPEG
│   ├── *.png (day-based workout images)
├── /docs
│   └── developer-manual.md
