import React,{Component}from 'react'
const styles = {
    child: {
        width: "100px",
        height: "100px",
        backgroundColor: "red"
    },
    parent: {
        width: "150px",
        height: "150px",
        backgroundColor: "blue"
    },
    ancestor: {
        width: "200px",
        height: "200px",
        backgroundColor: "black"
    }
}
class EventMessage extends Component{

    render() {
        return(
            <div
                onClick={() => {
                    console.log("Hello")
                }}
                style={styles.ancestor}>
                <div
                    onClick={() => {
                        console.log("parent");
                    }}
                    style={styles.parent}>
                    <div
                        onClick={(e) => {
                            console.log("child");
                            e.stopPropagation();//阻止事件流的传播
                        }}
                        style={styles.child}>
                    </div>
                </div>
               
            </div>
        )
    }
}
export default EventMessage