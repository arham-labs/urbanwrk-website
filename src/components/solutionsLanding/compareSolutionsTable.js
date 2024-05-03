import React from 'react';

export default function CompareSolutionsTable() {
    return (
        <div className='bg-white'>
            <div className='w-[88%] mx-auto py-20'>
                <h2 className='text-[45px] font-medium pb-5'>Compare our solutions</h2>
                <style>
                    {`
                    .header-cell {
                        width: 13%;
                        height: 103px;
                        padding: 10px; 
                        text-align: center;
                        border: 1px solid #000; 
                    }
                    `}
                </style>
                <div>
                    <table className="border-collapse border border-slate-400 ">
                        <thead>
                            <tr>
                                <th className="w-[25%] h-[103px] p-[10px] text-center border border-black  bg-bglight3">AMENITIES</th>
                                <th className="header-cell bg-bglight3">BESPOKE OFFICES</th>
                                <th className="header-cell bg-bglight3">READY TO START OFFICES</th>
                                <th className="header-cell bg-bglight3">FLEXI DESKS</th>
                                <th className="header-cell bg-bglight3">VIRTUAL OFFICES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-300 text-center">Fully managed office space</td>
                                <td className="border border-slate-300 text-center">✓</td>
                                <td className="border border-slate-300 text-center">✓</td>
                                <td className="border border-slate-300 text-center">✓</td>
                                <td className="border border-slate-300 text-center">-</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 text-center">Fully managed office space</td>
                                <td className="border border-slate-300 text-center">✓</td>
                                <td className="border border-slate-300 text-center">✓</td>
                                <td className="border border-slate-300 text-center">✓</td>
                                <td className="border border-slate-300 text-center">-</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 text-center">Fully managed office space</td>
                                <td className="border border-slate-300 text-center">✓</td>
                                <td className="border border-slate-300 text-center">✓</td>
                                <td className="border border-slate-300 text-center">✓</td>
                                <td className="border border-slate-300 text-center">-</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 text-center">Fully managed office space</td>
                                <td className="border border-slate-300 text-center">✓</td>
                                <td className="border border-slate-300 text-center">✓</td>
                                <td className="border border-slate-300 text-center">✓</td>
                                <td className="border border-slate-300 text-center">-</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 text-center">Fully managed office space</td>
                                <td className="border border-slate-300 text-center">✓</td>
                                <td className="border border-slate-300 text-center">✓</td>
                                <td className="border border-slate-300 text-center">✓</td>
                                <td className="border border-slate-300 text-center">-</td>
                            </tr>
                
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
