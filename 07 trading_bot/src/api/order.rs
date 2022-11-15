use apca::api::v2::order;
use apca::{ ApiInfo, Client };

use num_decimal::Num;

#[tokio::main]
pub async fn create_order() {
    std::env::set_var("APCA_API_KEY_ID", "PKCCG7QOSTQ03S46CNIA");
    std::env::set_var("APCA_API_SECRET_KEY", "5CFJ3nZ124LF1CpQ7sQp5AJlHtsLnWkxpgpCGkKl");
    std::env::set_var("APCA_API_BASE_URL", "https://paper-api.alpaca.markets");
    env_logger::init();

    let api_info = ApiInfo::from_env().unwrap();
    let client = Client::new(api_info);

    let request = order::OrderReqInit {
        type_: order::Type::Limit,
        limit_price: Some(Num::from(100)),
        ..Default::default()
    }

    .init("AAPL", order::Side::Buy, order::Amount::quantity(1));

    let order = client.issue::<order::Post>(&request).await.unwrap();
    println!("Created order {}", order.id.as_hyphenated());
}