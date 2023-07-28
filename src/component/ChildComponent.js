import React from "react";
/**
 * JSX
 * fragment
 */
class ChildComponet extends React.Component {
  // state = {
  //   firstName: "",
  //   lastName: "",
  // };

  // Click = () => {
  //   alert("Click");
  // };
  // handleChangeFirstName = (event) => {
  //   this.setState({
  //     firstName: event.target.value,
  //   });
  // };
  // handleChangeLastName = (event) => {
  //   this.setState({
  //     lastName: event.target.value,
  //   });
  // };
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert("Click me");
  // };
  state = {
    showJobs: false,
  };
  showHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  render() {
    // console.log("Check props:", this.props);
    // let name = this.props.name;
    // let age = this.props.age;
    //key : value
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    console.log("Check:", check);
    // let name = "Oanh";
    return (
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.showHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.showHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
// const ChildComponet = (props) => {
//   let { arrJobs } = props;
//   // let name = "Oanh";
//   return (
//     <>
//       <div className="job-lists">
//         {arrJobs.map((item, index) => {
//           if (item.salary >= 500) {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary} $
//               </div>
//             );
//           }
//         })}
//       </div>
//     </>
//   );
// };

export default ChildComponet;
