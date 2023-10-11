class Movie {
    constructor(title, duration, timing, totalSeats, ticketPrice) {
      this.title = title;
      this.duration = duration;
      this.timing = timing;
      this.totalSeats = 5;
      this.ticketPrice = ticketPrice;
      this.availableSeats=[1,2,3,4,5];
      this.bookedSeats = [];
    }
  
    showDetails() {

      console.log(`Movie: ${this.title}`);
      console.log(`Duration: ${this.duration} hours`);
      console.log(`Timing: ${this.timing}`);
      //console.log(`Booked Seats: ${this.bookedSeats.join(', ')}`);
      console.log(`Available Seats: ${this.availableSeats.join(', ')}`);
      console.log(`Ticket Price: $${this.ticketPrice}`);
      console.log("\n");
    }
  
    bookTicket(seatNumbers) {
      const bookedSeats = [];
      const unbookedSeats = [];
  
      for (const seatNumber of seatNumbers) {
        if (this.availableSeats.includes(seatNumber)) {
          const index = this.availableSeats.indexOf(seatNumber);
          this.availableSeats.splice(index, 1);
          this.bookedSeats.push(seatNumber);
          bookedSeats.push(seatNumber);
        } else {
          unbookedSeats.push(seatNumber);
        }
      }
  
      if (bookedSeats.length > 0) {
        console.log(`Booked seat No: ${bookedSeats.join(', ')} for ${this.title}`);
      }
  
      if (unbookedSeats.length > 0) {
        console.log(`Seat(s) ${unbookedSeats.join(', ')} not available for ${this.title}.`);
      }
  
      if (this.availableSeats.length === 0) {
        console.log(`Theater is fully booked for ${this.title} .`);
      }
    }
  
    cancelTicket(seatNumbers) {
      const canceledSeats = [];
      const uncanceledSeats = [];
  
      for (const seatNumber of seatNumbers) {
        if (this.bookedSeats.includes(seatNumber)) {
          const index = this.bookedSeats.indexOf(seatNumber);
          this.bookedSeats.splice(index, 1);
          this.availableSeats.push(seatNumber);
          canceledSeats.push(seatNumber);
        } else {
          uncanceledSeats.push(seatNumber);
        }
      }
  
      if (canceledSeats.length > 0) {
        console.log(`Cancelled seat No: ${canceledSeats.join(', ')} for ${this.title}`);
      }
  
      if (uncanceledSeats.length > 0) {
        console.log(`Seat No ${uncanceledSeats.join(', ')} was not yet booked for ${this.title}.`);
      }
    }
  }
  
  class MovieTheatre {
    constructor() {
      this.movies = [];
    }
  
    addMovie(movie) {
      this.movies.push(movie);
    }
  
    showMovieDetails() {
      for (const movie of this.movies) {
        movie.showDetails();
      }
      
    }
  }
  
  const theatre = new MovieTheatre();
  
  const movie1 = new Movie("cricket", 3, "2:00 PM", 5, 200);
 const movie4= new Movie("badminton",2.30,"6:00 pm",5,300);
  
  theatre.addMovie(movie1);
 
theatre.addMovie(movie4);
  theatre.showMovieDetails();
  console.log(`\n`);
  movie1.bookTicket([1, 2, 3]);
  console.log(`\n`);
  theatre.showMovieDetails();
  console.log(`\n`);
  movie1.bookTicket([4]);
  console.log(`\n`);
  theatre.showMovieDetails();
  console.log(`\n`);
  movie1.cancelTicket([5]);
  console.log(`\n`);
  theatre.showMovieDetails();
  console.log(`\n`);
  movie1.cancelTicket([4]);
  console.log(`\n`);
  theatre.showMovieDetails();
  console.log(`\n`);
  movie4.cancelTicket([4]);
  