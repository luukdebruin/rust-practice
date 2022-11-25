use std::io;
use rand::{distributions::{Distribution, Standard}, Rng};

#[derive(Debug)]
enum Pick {
    Rock,
    Paper,
    Scissors,
}

impl Pick {
    fn enum_to_string(self) -> &'static str {
        match self {
            Pick::Rock => "Rock",
            Pick::Paper => "Paper",
            Pick::Scissors => "Scissors",
        }
    }
}

impl Distribution<Pick> for Standard {
    fn sample<R: Rng + ?Sized>(&self, rng: &mut R) -> Pick {
        match rng.gen_range(0..=2) {
            0 => Pick::Rock,
            1 => Pick::Paper,
            _ => Pick::Scissors,
        }
    }
}

fn main() {
    let pick: Pick = rand::random();
    let pick_to_str: &str = Pick::enum_to_string(pick);

    println!("Pick: {}", pick_to_str);

    loop {
        println!("Enter Rock, Paper or Scissors");

        let mut input = String::new();

        io::stdin()
            .read_line(&mut input)
            .expect("Failed to read line");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };
    
        println!("{}", input.as_str());        
        println!("{}", pick_to_str);

        if input.as_str() == pick_to_str {
            println!("That is right!");
            break;
        };
        // match input.as_str() {
        //     pick_to_str => {
        //         println!("That is right!");
        //         break;
        //     },
        //     _ => continue,
        // };

        // println!("You entered {}", input);
    
        // match input.as_str() {
        //     "Rock" | "Paper" | "Scissor" => input,
        //     other_input => println!("Please enter Rock, Paper or Scissor"),
        // }
    }
    
}
