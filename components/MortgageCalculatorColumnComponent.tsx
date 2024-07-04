export default function MortgageCalculatorColumn({children , bgcolour , textcolour, columnheight}) {
    return (
        <div className={`mortgage-calculator-column ${bgcolour} ${textcolour} ${columnheight}`}>
            {children}
        </div>
    )
}