The Masterman school building, having been erected back in 1933, features an incredibly old bell system. 

Although the bells themselves work just fine, the actual method in which they must be scheduled requires knowledge of an arbitrary programming method that uses wooden pegs and a series of holes in a grid.

![IMG_0938](https://github.com/importTahsinZaman/masterman-bell2/assets/86907892/d8f74163-c83f-4253-8dbd-94c55b16be41)


As only one person in the district knows how to program the bells, the school is often left either manually operating the bells, or turning them off altogether when something malfunctions or when an abnormal schedule day such as a weather delay day occurs.

I wired the system, consisting of a Raspberry Pi (mini computer), Arduino (microprocessor), and relay, directly to the switch for the bells. This allows for consistent electronic triggering of the bell system.

The Raspberry Pi reads the database via api and decides whether or not it is time to ring the bell. 

If it is time to ring the bell, the Raspberry Pi tells the Arduino to trigger the relay, which triggers the bell.

![IMG_0937](https://github.com/importTahsinZaman/masterman-bell2/assets/86907892/756ce4c0-5949-4f8b-be28-3c6ed68605b4)

![IMG_0939](https://github.com/importTahsinZaman/masterman-bell2/assets/86907892/47027749-9b5a-4dc4-80c6-4078190b4c76)

With a password, Masterman administration can log in to the website and create, edit, and select schedules.

<img width="1440" alt="Screenshot 2024-05-30 at 2 06 41 PM" src="https://github.com/importTahsinZaman/masterman-bell2/assets/86907892/e27b9f32-d19d-45f1-ace6-7a1c550c1d8e">

The website is built with NextJs with Supabase for the database.

I made the UI incredibly easy to use to remove hassle in schedule management. This new digital system completely eradicates the arduous problems of the old analog one.

<img width="1439" alt="Screenshot 2024-05-30 at 2 15 53 PM" src="https://github.com/importTahsinZaman/masterman-bell2/assets/86907892/1e5f3485-48e7-4231-8ed7-2657c9202a77">
