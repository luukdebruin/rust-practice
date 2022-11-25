fn main() {
    let number = fibonacci(20);
    println!("{}", number);
}

fn fibonacci(n: i32) -> u64 {
    if n < 0 {
        panic!("{} n is negative", n);
    }
    match n {
        0 => panic!("Not a right number"),
        1 | 2 => 1,
        3 => 2, 
        _ => fibonacci(n - 1) + fibonacci(n - 2)
    }
}
