// itcr 임타클반

type Quotaion = {
    carName: string;
    year: number;
    price: number;
};

export default function QuotationCard({carName, year, price}: Quotaion) {
    return  (<div className="w-1/4 h-1/4 bg-gray-200  rounded-md shadow-lg p-4 m-8">
        <h2>{carName}</h2>
        <p>{year}</p>
        <p>{price}</p>
    </div>);
}

// 리턴 처음에는 이렇게 연습하는 것이 좋음 return (<></>);