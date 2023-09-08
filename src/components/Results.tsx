import '../styles/results.css';

function Results( {...props} ) {
    const results = [
        {
            resultMonth: 'August',
            resultYear: '2023',
            resultName: 'Book Smiles 5k',
            resultLink: 'https://runsignup.com/Race/Results/146264/?resultSetId=401291#resultSetId-401291;perpage:2000',
            resultVideoLink: 'https://www.youtube.com/watch?v=iKf0rfMfyqE'
        },
        {
            resultMonth: 'August',
            resultYear: '2023',
            resultName: 'SHPOA Harbor Hustle 5K',
            resultLink: 'https://runsignup.com/Race/Results/148627#resultSetId-399623;perpage:2000',
            resultVideoLink: 'https://www.youtube.com/watch?v=tBVT-BP3Pq0'
        },
        {
            resultMonth: 'August',
            resultYear: '2023',
            resultName: 'Cedar Island 5k Swim',
            resultLink: 'https://runsignup.com/Race/Results/31081#resultSetId-399614;perpage:2000',
            resultVideoLink: 'https://www.youtube.com/watch?v=tMwSDAn3k0w'
        },
        {
            resultMonth: 'January',
            resultYear: '2023',
            resultName: 'Example January',
            resultLink: 'https://runsignup.com/Race/Results/31081#resultSetId-399614;perpage:2000',
            resultVideoLink: 'https://www.youtube.com/watch?v=tMwSDAn3k0w'
        },
        {
            resultMonth: 'March',
            resultYear: '2022',
            resultName: 'Example March 2022',
            resultLink: 'https://runsignup.com/Race/Results/31081#resultSetId-399614;perpage:2000',
            resultVideoLink: 'https://www.youtube.com/watch?v=tMwSDAn3k0w'
        },
        {
            resultMonth: 'February',
            resultYear: '2023',
            resultName: 'Example February 2023',
            resultLink: 'https://runsignup.com/Race/Results/31081#resultSetId-399614;perpage:2000',
            resultVideoLink: 'https://www.youtube.com/watch?v=tMwSDAn3k0w'
        },
        {
            resultMonth: 'March',
            resultYear: '2023',
            resultName: 'Example March 2023',
            resultLink: 'https://runsignup.com/Race/Results/31081#resultSetId-399614;perpage:2000',
            resultVideoLink: 'https://www.youtube.com/watch?v=tMwSDAn3k0w'
        },
        {
            resultMonth: 'April',
            resultYear: '2023',
            resultName: 'Example April 2023',
            resultLink: 'https://runsignup.com/Race/Results/31081#resultSetId-399614;perpage:2000',
            resultVideoLink: 'https://www.youtube.com/watch?v=tMwSDAn3k0w'
        },
    ];

    const resultsJanuary = results.filter(function(result) {
        return (result.resultMonth === 'January');
    });
    const resultsFebruary = results.filter(function(result) {
        return (result.resultMonth === 'February');
    });
    const resultsMarch = results.filter(function(result) {
        return (result.resultMonth === 'March');
    });
    const resultsApril = results.filter(function(result) {
        return (result.resultMonth === 'April');
    });
    const resultsMay = results.filter(function(result) {
        return (result.resultMonth === 'May');
    });
    const resultsJune = results.filter(function(result) {
        return (result.resultMonth === 'June');
    });

    const resultsJuly = results.filter(function(result) {
        return (result.resultMonth === 'July');
    });
    const resultsAugust = results.filter(function(result) {
        return (result.resultMonth === 'August');
    });
    const resultsSeptember = results.filter(function(result) {
        return (result.resultMonth === 'September');
    });
    const resultsOctober = results.filter(function(result) {
        return (result.resultMonth === 'October');
    });
    const resultsNovember = results.filter(function(result) {
        return (result.resultMonth === 'November');
    });
    const resultsDecember = results.filter(function(result) {
        return (result.resultMonth === 'December');
    });

    const years = ['2023', '2022']

    // Database Explanation
    // Array of years with results
    // Render All Months For Each Year
    // Only Show Months with Results
    // Render Results to Months if Results Date Matches Month and Year

    return (
        <>
            <div id='resultsPageBackground'>
                <h1 className='title'>RESULTS</h1>
            </div>
            {years.map((year) => {
                return (
                    <>
                        <div className='yearBlock fade'>
                            <h2 className='yearTitle'>{year}</h2>
                                <div className='monthsBlockFour'>
                                    <div className='resultsBlock'>
                                        <h2 className='monthTitle'>January</h2>
                                        {resultsJanuary.map((result) => {
                                            return (
                                                <>
                                                    {result.resultYear === year ? 
                                                    <div className='resultsWrapperSmall'>
                                                        <a href={result.resultLink} target='_blank' className='resultName'>{result.resultName}</a> 
                                                        <span className='resultDivider'>|</span>
                                                        <a href={result.resultVideoLink} target='_blank' className='resultName'>Video</a>
                                                    </div>
                                                    : <></>}
                                                </>
                                            )
                                        })}
                                    </div>
                                    <div className='resultsBlock'>
                                        <h2 className='monthTitle'>February</h2>
                                        {resultsFebruary.map((result) => {
                                            return (
                                                <>
                                                    {result.resultYear === year ? 
                                                    <div className='resultsWrapperSmall'>
                                                        <a href={result.resultLink} target='_blank' className='resultName'>{result.resultName}</a> 
                                                        <span className='resultDivider'>|</span>
                                                        <a href={result.resultVideoLink} target='_blank' className='resultName'>Video</a>
                                                    </div>
                                                    : <></>}
                                                </>
                                            )
                                        })}
                                    </div>
                                    <div className='resultsBlock'>
                                        <h2 className='monthTitle'>March</h2>
                                        {resultsMarch.map((result) => {
                                            return (
                                                <>
                                                    {result.resultYear === year ? 
                                                    <div className='resultsWrapperSmall'>
                                                        <a href={result.resultLink} target='_blank' className='resultName'>{result.resultName}</a> 
                                                        <span className='resultDivider'>|</span>
                                                        <a href={result.resultVideoLink} target='_blank' className='resultName'>Video</a>
                                                    </div>
                                                    : <></>}
                                                </>
                                            )
                                        })}
                                    </div>
                                    <div className='resultsBlock'>
                                        <h2 className='monthTitle'>April</h2>
                                        {resultsApril.map((result) => {
                                            return (
                                                <>
                                                    {result.resultYear === year ? 
                                                    <div className='resultsWrapperSmall'>
                                                        <a href={result.resultLink} target='_blank' className='resultName'>{result.resultName}</a> 
                                                        <span className='resultDivider'>|</span>
                                                        <a href={result.resultVideoLink} target='_blank' className='resultName'>Video</a>
                                                    </div>
                                                    : <></>}
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className='monthsBlockFour'>
                                    <div className='resultsBlock'>
                                        <h2 className='monthTitle'>May</h2>
                                        {resultsMay.map((result) => {
                                            return (
                                                <>
                                                    {result.resultYear === year ? 
                                                    <div className='resultsWrapperSmall'>
                                                        <a href={result.resultLink} target='_blank' className='resultName'>{result.resultName}</a> 
                                                        <span className='resultDivider'>|</span>
                                                        <a href={result.resultVideoLink} target='_blank' className='resultName'>Video</a>
                                                    </div>
                                                    : <></>}
                                                </>
                                            )
                                        })}
                                    </div>
                                    <div className='resultsBlock'>
                                        <h2 className='monthTitle'>June</h2>
                                        {resultsJune.map((result) => {
                                            return (
                                                <>
                                                    {result.resultYear === year ? 
                                                    <div className='resultsWrapperSmall'>
                                                        <a href={result.resultLink} target='_blank' className='resultName'>{result.resultName}</a> 
                                                        <span className='resultDivider'>|</span>
                                                        <a href={result.resultVideoLink} target='_blank' className='resultName'>Video</a>
                                                    </div>
                                                    : <></>}
                                                </>
                                            )
                                        })}
                                    </div>
                                <div className='resultsBlock'>
                                        <h2 className='monthTitle'>July</h2>
                                        {resultsJuly.map((result) => {
                                            return (
                                                <>
                                                    {result.resultYear === year ? 
                                                    <div className='resultsWrapperSmall'>
                                                        <a href={result.resultLink} target='_blank' className='resultName'>{result.resultName}</a>
                                                        <span className='resultDivider'>|</span>
                                                        <a href={result.resultVideoLink} target='_blank' className='resultName'>Video</a> 
                                                    </div>
                                                    : <></>}
                                                </>
                                            )
                                        })}
                                    </div>
                                    <div className='resultsBlock'>
                                        <h2 className='monthTitle'>August</h2>
                                        {resultsAugust.map((result) => {
                                            return (
                                                <>
                                                    {result.resultYear === year ? 
                                                    <div className='resultsWrapperSmall'>
                                                        <a href={result.resultLink} target='_blank' className='resultName'>{result.resultName}</a>
                                                        <span className='resultDivider'>|</span>
                                                        <a href={result.resultVideoLink} target='_blank' className='resultName'>Video</a> 
                                                    </div>
                                                    : <></>}
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className='monthsBlockFour'>
                                    <div className='resultsBlock'>
                                        <h2 className='monthTitle'>September</h2>
                                        {resultsSeptember.map((result) => {
                                            return (
                                                <>
                                                    {result.resultYear === year ? 
                                                    <div className='resultsWrapperSmall'>
                                                        <a href={result.resultLink} target='_blank' className='resultName'>{result.resultName}</a>
                                                        <span className='resultDivider'>|</span>
                                                        <a href={result.resultVideoLink} target='_blank' className='resultName'>Video</a> 
                                                    </div>
                                                    : <></>}
                                                </>
                                            )
                                        })}
                                    </div>
                                    <div className='resultsBlock'>
                                        <h2 className='monthTitle'>October</h2>
                                        {resultsOctober.map((result) => {
                                            return (
                                                <>
                                                    {result.resultYear === year ? 
                                                    <div className='resultsWrapperSmall'>
                                                        <a href={result.resultLink} target='_blank' className='resultName'>{result.resultName}</a>
                                                        <span className='resultDivider'>|</span>
                                                        <a href={result.resultVideoLink} target='_blank' className='resultName'>Video</a> 
                                                    </div>
                                                    : <></>}
                                                </>
                                            )
                                        })}
                                    </div>
                                    <div className='resultsBlock'>
                                        <h2 className='monthTitle'>November</h2>
                                        {resultsNovember.map((result) => {
                                            return (
                                                <>
                                                    {result.resultYear === year ? 
                                                    <div className='resultsWrapperSmall'>
                                                        <a href={result.resultLink} target='_blank' className='resultName'>{result.resultName}</a>
                                                        <span className='resultDivider'>|</span>
                                                        <a href={result.resultVideoLink} target='_blank' className='resultName'>Video</a> 
                                                    </div>
                                                    : <></>}
                                                </>
                                            )
                                        })}
                                    </div>
                                    <div className='resultsBlock'>
                                        <h2 className='monthTitle'>December</h2>
                                        {resultsDecember.map((result) => {
                                            return (
                                                <>
                                                    {result.resultYear === year ? 
                                                    <div className='resultsWrapperSmall'>
                                                        <a href={result.resultLink} target='_blank' className='resultName'>{result.resultName}</a>
                                                        <span className='resultDivider'>|</span>
                                                        <a href={result.resultVideoLink} target='_blank' className='resultName'>Video</a> 
                                                    </div>
                                                    : <></>}
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                        </div>
                        <div className='yearBorder'/>
                    </>
                )
            })}
        </>
    )
}

export default Results;