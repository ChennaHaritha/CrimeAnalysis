import React from "react";
import {BarChart} from 'react-easy-chart';


class Bargraph extends React.Component{
    render(){
        return(
            <BarChart
                axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
                axes
                height={650}
                width={450}
                colorBars
                data={[
                    {
                        x: 'Robbery',
                        y: 46
                    },
                    {
                        x: 'Missing person',
                        y: 26
                    },
                    {
                        x: 'Cybercrime',
                        y: 10
                    } ,
                    {
                        x: 'murder',
                        y: 50
                    }, 
                    {
                        x: 'rape',
                        y: 24
                    } 
                    ]}
                />
                  )
                }
            }

export default Bargraph;