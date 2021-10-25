export default function Wallet({ wallet }) {
    // const [wallet, setWallet] = useState([]);

    // const token = UserLoginValidation();

    // useEffect(() => {
    //     // setWallet([])    

    //     getWallet(token).then((res) => setWallet(res.data));   
    // }, [])
    console.log(wallet)

    return (
        <>
            <span>{wallet.date}aaa</span>
            <span>{wallet.description}</span>
            <span>{wallet.value}</span>
        </>
    );
}