import dayjs from "dayjs";
import { Date, Description, Info, Value } from "../styles/TransactionsStyle";

export default function Wallet({ wallet }) {
    const {
        date,
        description,
        value,
    } = wallet;  

    const dateFormat = dayjs(date).format('DD/MM');

    let valueFormat = value;
    if (value < 0) {
        valueFormat = value * -1;
    }
    valueFormat = value.toFixed(2);

    return (
        <Info>
            <Date>{ dateFormat }</Date>
            <Description>{ description }</Description>
            <Value value={value}>{ valueFormat }</Value>
        </Info>
    );
}
