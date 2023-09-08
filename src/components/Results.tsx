import '../styles/results.css';
import { useEffect, useState } from 'react';

// Firebase Imports
import { collection, getDocs } from 'firebase/firestore/lite';

function Results( {...props} ) {
    const [results, setResults]: any[] = useState([]);
    const [years, setYears] = useState(['2023', '2022']);

    async function getResults(db:any) {
        const resultsCol = collection(db, 'results');
        const resultsSnapshot = await getDocs(resultsCol);
        const results = resultsSnapshot.docs.map(doc => doc.data());
        setResults(results);
    };

    async function getYears(db:any) {
        const yearsCol = collection(db, 'years');
        const yearsSnapshot = await getDocs(yearsCol);
        const years = yearsSnapshot.docs.map(doc => doc.data());
        setYears(years.map((year) => year.uid));
    };

    useEffect(() => {
        getResults(props.db);
        getYears(props.db);
        console.log(years);
    }, []);

    const resultsJanuary = results.filter(function(result:any) {
        return (result.resultMonth === 'January');
    });
    const resultsFebruary = results.filter(function(result:any) {
        return (result.resultMonth === 'February');
    });
    const resultsMarch = results.filter(function(result:any) {
        return (result.resultMonth === 'March');
    });
    const resultsApril = results.filter(function(result:any) {
        return (result.resultMonth === 'April');
    });
    const resultsMay = results.filter(function(result:any) {
        return (result.resultMonth === 'May');
    });
    const resultsJune = results.filter(function(result:any) {
        return (result.resultMonth === 'June');
    });

    const resultsJuly = results.filter(function(result:any) {
        return (result.resultMonth === 'July');
    });
    const resultsAugust = results.filter(function(result:any) {
        return (result.resultMonth === 'August');
    });
    const resultsSeptember = results.filter(function(result:any) {
        return (result.resultMonth === 'September');
    });
    const resultsOctober = results.filter(function(result:any) {
        return (result.resultMonth === 'October');
    });
    const resultsNovember = results.filter(function(result:any) {
        return (result.resultMonth === 'November');
    });
    const resultsDecember = results.filter(function(result:any) {
        return (result.resultMonth === 'December');
    });

    let yearsTest = ['2023', '2022', '2021'];
    //yearsTest = years;

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
            {yearsTest.map((year) => {
                return (
                    <>
                        <div className='yearBlock fade'>
                            <h2 className='yearTitle'>{year}</h2>
                                <div className='monthsBlockFour'>
                                    <div className='resultsBlock'>
                                        <h2 className='monthTitle'>January</h2>
                                        {resultsJanuary.map((result:any) => {
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
                                        {resultsFebruary.map((result:any) => {
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
                                        {resultsMarch.map((result:any) => {
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
                                        {resultsApril.map((result:any) => {
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
                                        {resultsMay.map((result:any) => {
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
                                        {resultsJune.map((result:any) => {
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
                                        {resultsJuly.map((result:any) => {
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
                                        {resultsAugust.map((result:any) => {
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
                                        {resultsSeptember.map((result:any) => {
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
                                        {resultsOctober.map((result:any) => {
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
                                        {resultsNovember.map((result:any) => {
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
                                        {resultsDecember.map((result:any) => {
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