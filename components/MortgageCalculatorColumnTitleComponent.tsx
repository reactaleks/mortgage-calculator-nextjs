export default function CalculatorColumnTitle({columnTitle, textalaignment}) {
    return (
        <div className="mortgage-calculator-column-title p-5">
            <h2 className={`mortgage-calculator-column-title-heading text-xl font-bold ${textalaignment}`}>{columnTitle}</h2>
        </div>
    )
}