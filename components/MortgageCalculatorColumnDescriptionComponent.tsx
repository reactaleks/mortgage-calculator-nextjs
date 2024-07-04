export default function CalculatorColumnDescription({children, textalignment}) {
    return (
        <div className={`mortgage-calcualtor-column-description ${textalignment} pl-5 pr-5`}>
            {children}
        </div>
    )
}