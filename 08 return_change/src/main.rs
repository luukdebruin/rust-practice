fn main() {
    let coins_amount: i32 = change(20934);
    println!("{}", coins_amount);
}

fn change(amount: i32) -> i32 {
    let coins = [500, 100, 25, 10, 5, 1];
    let mut count: i32 = 0;
    let mut remainder: i32 = amount;
    for coin in coins {
        if coin > remainder {
            continue;
        } else {
            let modulo: i32 = remainder % coin;
            if remainder != 0 {
                count = count + ((remainder - modulo) / coin);
                remainder = modulo;
            }
        }
    }
    count
}
