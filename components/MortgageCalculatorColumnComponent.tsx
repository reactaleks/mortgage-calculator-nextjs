export default function MortgageCalculatorColumn({children , bgcolour , textcolour, columnheight, roundBorder}) {
    return (
        <div className={`mortgage-calculator-column ${bgcolour} ${textcolour} ${columnheight} ${roundBorder} sm:px-5 md:px-10`}>
            {children}
        </div>
    )
}