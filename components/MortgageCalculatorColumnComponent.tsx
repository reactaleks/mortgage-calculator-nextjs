export default function MortgageCalculatorColumn({children , bgcolour , textcolour, columnheight, roundBorder}) {
    return (
        <div className={`mortgage-calculator-column h-full ${bgcolour} ${textcolour} ${columnheight} ${roundBorder} sm:px-5 md:px-4 lg:h-full content-center `}>
            {children}
        </div>
    )
}