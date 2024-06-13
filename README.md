The Masterman school building, having been erected back in 1933, features an incredibly old bell system. 

Although the bells themselves work just fine, the actual method in which they must be scheduled requires knowledge of an arbitrary programming method that uses wooden pegs and a series of holes in a grid.

As only one person in the district knows how to program the bells, the school is often left either manually operating the bells, or turning them off altogether when something malfunctions or when an abnormal schedule day such as a weather delay day occurs.

I wired the system, consisting of a Raspberry Pi (mini computer), Arduino (microprocessor), and relay, directly to the switch for the bells. This allows for consistent electronic triggering of the bell system.

The Raspberry Pi reads the database via api and decides whether or not it is time to ring the bell. 

If it is time to ring the bell, the Raspberry Pi tells the Arduino to trigger the relay, which triggers the bell.

With a password, Masterman administration can log in to the website and create, edit, and select schedules.

The website is built with NextJs with Supabase for the database.

I made the UI incredibly easy to use to remove hassle in schedule management. This new digital system completely eradicates the arduous problems of the old analog one.

