export default function CalculatorColumnTitle({columnTitle, textalaignment}) {
    return (
        <div className="p-5 mortgage-calculator-column-title">
            <h2 className={`mortgage-calculator-column-title-heading text-nowrap text-2xl text-darker-blue font-extrabold ${textalaignment}`}>{columnTitle}</h2>
        </div>
    )
}