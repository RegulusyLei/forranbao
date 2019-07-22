import ViewModel from './viewmodel'

class Graphicreport extends ViewModel
{ 
    constructor ()
    {
        super();
    }

    init ()
    {

        this.methods.rowClick = this.rowClick;
        this.methods.columnClick = this.columnClick;
        this.methods.downPoint = this.downPoint;
        this.methods.moveLen = this.moveLen;
        this.methods.upPoint = this.upPoint;
    }

    getData ()
    {
        return {
            tableHead : [
                {
                    "channelMethod": "补偿",
                },
                {
                    "channelMethod": "FCS-A/CV1",
                },
                {
                    "channelMethod": "FCS-A/CV2",
                },
                {
                    "channelMethod": "FCS-A/CV3",
                },
                {
                    "channelMethod": "FCS-A/CV4",
                },
                {
                    "channelMethod": "FCS-A/CV5",
                },
                {
                    "channelMethod": "FCS-A/CV6",
                },
                {
                    "channelMethod": "FCS-A/CV7",
                },
                {
                    "channelMethod": "FCS-A/CV8",
                },
                {
                    "channelMethod": "FCS-A/CV9",
                }
            ],
            column :[
                {
                    name: 'P1',
                    value: ['---', 20000000.00 , 300],
                },
                {
                    name: 'P2',
                    value: ['---', 300, 400],
                },
                {
                    name: 'P3',
                    value: ['---', 200, 500],
                },
                {
                    name: 'P4',
                    value: ['---', 200, 500],
                },
                {
                    name: 'P5',
                    value: ['---', 200, 500],
                },
                {
                    name: 'P6',
                    value: ['---', 200, 500],
                },
                {
                    name: 'P7',
                    value: ['---', 200, 500],
                },
                {
                    name: 'P8',
                    value: ['---', 200, 500],
                },
                {
                    name: 'P9',
                    value: ['---', 200, 500],
                },
                {
                    name: 'P10',
                    value: ['---', 200, 500],
                }
            ],
            tableHeight: 230,
            graphicHeight: 'calc(100% - 230px)',
            pointY: '',
            moveLength: '',
            moveFlag: false
        }
    }

    rowClick (row)
    {
        const rowIndex =  this.column.findIndex((curItem)=>{
            return row.name === curItem.name;
        })

        console.log('行下标');
        console.log(rowIndex);

    }

    columnClick (column,event)
    {
        const columnIndex =  this.tableHead.findIndex((curItem)=>{
            return column.label === curItem.channelMethod;
        })

        const siblingsNodes =  event.target.parentNode.parentNode.childNodes;

        siblingsNodes.forEach((item)=>{

            item.childNodes.forEach((item1)=>{

                item1.style.backgroundColor = "#FFF"
                
            })
            
        })

        if (event.target.innerText !== '补偿')
        {
            event.target.style.backgroundColor = '#ECF5FF';
        }

        console.log('列下标');
        console.log(columnIndex); //列下标
     
    }



    downPoint (e)
    {
        this.moveFlag = true
        this.pointY = e.pageY;
        // console.log(e.target.parentNode.previousElementSibling.clientHeight)
        // console.log(e.target.parentNode.clientHeight)
    }

    moveLen (e)
    {
        if (this.moveFlag)
        {
            this.moveLength = e.pageY - this.pointY;
            this.pointY = e.pageY;
            this.tableHeight = e.target.parentNode.clientHeight - this.moveLength;

            if (this.tableHeight < 230)
            {
                this.tableHeight = 230
            }
            // this.graphicHeight = e.target.parentNode.previousElementSibling.clientHeight + this.moveLength;
            this.graphicHeight = `calc(100% - ${this.tableHeight}px)`;
            console.log(this.tableHeight)
            console.log(this.graphicHeight)

        }
    }

    upPoint (e)
    {
        this.moveFlag = false;
    }

  
    
}

export default new Graphicreport.prototype.constructor;