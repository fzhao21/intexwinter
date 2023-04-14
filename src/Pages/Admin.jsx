import React, { useState } from "react";
const Admin = () => {
  const [modalViewAllOpen, setModalViewAllOpen] = useState(false);
  const [currUsers, setCurrUsers] = useState([]);
  const [currGroup, setCurrGroup] = useState("");
  const [newGroup, setNewGroup] = useState("");

  function ModalOpenHandler(props) {
    setCurrUsers([]);
    setCurrGroup(props.GroupName);
    setNewGroup("");
    setModalViewAllOpen(true);
    const requestBody = {
      GroupName: props.GroupName,
    };
    fetch(
      "https://iqud4n7qbgvxc37to3tyuszkze0bkfhq.lambda-url.us-west-1.on.aws/",
      {
        method: "POST",
        body: JSON.stringify(requestBody),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const users = data.Users;
        const newCurrUsers = [];
        for (let i = 0; i < users.length; i++) {
          const user = users[i];
          const email = user.Attributes.find(
            (attribute) => attribute.Name === "email"
          ).Value;
          const sub = user.Attributes.find(
            (attribute) => attribute.Name === "sub"
          ).Value;
          newCurrUsers.push({ email, sub });
        }
        setCurrUsers(newCurrUsers);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }

  function ModalCloseHandler() {
    setModalViewAllOpen(false);
  }

  function SelectNewGroupHandler(event) {
    setNewGroup(event.target.value);
  }

  function ChangeRoleHandler(sub, newGroup, oldGroup) {
    const requestBody = {
      NewGroupName: newGroup,
      OldGroupName: oldGroup,
      Username: sub,
    };
    console.log(JSON.stringify(requestBody));
    fetch(
      "https://uhl5dzwwzeipqz247g5upmbdsy0fktxn.lambda-url.us-west-1.on.aws/",
      {
        method: "POST",
        body: JSON.stringify(requestBody),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error", error);
        window.location.reload();
      });
  }

  return (
    <div className="AdminDiv">
      <h1>User Groups</h1>
      <ul className="AdminList">
        <li className="AdminListItem">
          <button
            className="AdminListGroupButton"
            onClick={() => ModalOpenHandler({ GroupName: "admin" })}
          >
            Admins
          </button>
        </li>
        <li className="AdminListItem">
          <button
            className="AdminListGroupButton"
            onClick={() => ModalOpenHandler({ GroupName: "archeologist" })}
          >
            Archeologists
          </button>
        </li>
        <li className="AdminListItem">
          <button
            className="AdminListGroupButton"
            onClick={() => ModalOpenHandler({ GroupName: "guest" })}
          >
            Guests
          </button>
        </li>
      </ul>
      <br />
      <br />
      <br />
      <br />
      {modalViewAllOpen ? (
        <div>
          <div>
            <h1 className="AdminUserHeading">All {currGroup} users</h1>
            <br />
            <div>
              <table className="my-table">
                <thead>
                  <tr>
                    <th>
                      <h3>Email</h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currUsers.map((user) => (
                    <tr key={user.email}>
                      <td>
                        <h4>{user.email}</h4>
                      </td>
                      <td>
                        <form
                          onSubmit={(event) => {
                            event.preventDefault();
                            ChangeRoleHandler(user.sub, newGroup, currGroup);
                          }}
                        >
                          <input type="hidden" name="sub" value={user.sub} />
                          <input
                            type="hidden"
                            name="oldGroup"
                            value={currGroup}
                          />
                          <select
                            name="newGroup"
                            onChange={SelectNewGroupHandler}
                          >
                            <option value="">Choose Role</option>
                            <option value="admin">Admin</option>
                            <option value="archeologist">Archeologist</option>
                            <option value="guest">Guest</option>
                          </select>
                          <button
                            className="SubmitEdit"
                            type="submit"
                            disabled={newGroup === "" || newGroup === currGroup}
                          >
                            submit edit
                          </button>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <br />
              <button
                className="AdminListGroupButton"
                onClick={ModalCloseHandler}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Admin;
