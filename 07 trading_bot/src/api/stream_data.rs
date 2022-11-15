#![allow(clippy::let_unit_value)]

use apca::data::v2::stream::{ drive, MarketData, RealtimeData, IEX };
use apca::{ ApiInfo, Error, Client };

use futures::FutureExt as _;
use futures::StreamExt as _;
use futures::TryStreamExt as _;

#[tokio::main]
pub async fn stream() {
    std::env::set_var("APCA_API_KEY_ID", "PKCCG7QOSTQ03S46CNIA");
    std::env::set_var("APCA_API_SECRET_KEY", "5CFJ3nZ124LF1CpQ7sQp5AJlHtsLnWkxpgpCGkKl");
    std::env::set_var("APCA_API_BASE_URL", "https://paper-api.alpaca.markets");
    env_logger::init();

    let api_info = ApiInfo::from_env().unwrap();
    let client = Client::new(api_info);

    let (mut stream, mut subscription) = client.subscribe::<RealtimeData<IEX>>().await.unwrap();

    let mut data = MarketData::default();

    data.set_bars(["SPY", "XLK"]);
    data.set_quotes(["AAPL"]);

    let subscribe = subscription.subscribe(&data).boxed();

    let () = drive(subscribe, &mut stream).await.unwrap().unwrap().unwrap();
    let () = stream.take(50).map_err(Error::WebSocket).try_for_each(|result| async {
        result.map(|data| println!("{:?}", data)).map_err(Error::Json)
    }).await.unwrap();
}