# parsing app

- interface 는 프론트가 javascript 에서는 사용 불가 하여 dto 를 사용 - [이유](https://docs.nestjs.com/controllers#request-payloads)

## Todo List

- [x] [한경닷컴-해외지수](https://datacenter.hankyung.com/major-indices)
- [x] 한경닷컴-해외지수 dto, interface 작성
- [x] [gainers-losser]() 데이터 가져오기
- [x] gainers-losser dto, interface 작성
- [ ] [한경닷컴-외환](https://datacenter.hankyung.com/currencies)
- [x] [한경닷컴-원자제](https://datacenter.hankyung.com/commodities)
- [x] 한경닷컴-원자제 dto, interface 작성
- [ ] [한경닷컴-채권금리](https://datacenter.hankyung.com/rates-bonds)
- [ ] [한경닷컴-경제캘린더](https://datacenter.hankyung.com/economic-calendar)
- [ ] [coinbase](https://www.coinbase.com/converter)
- [x] upbit socket
- [x] coinone socket
- [x] 공포지수, dto, interface
- [x] coinglass (https://coinglass.com/) - 청산데이터, dto, interface
- [ ] RSI 강도 지수
- [ ] health check - status page

## start

```bash
  pnpm install
  pnpm start # or pnpm start:dev
```

## swagger

- after app start
- [swagger](http://localhost:3000/api)
