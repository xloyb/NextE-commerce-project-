async function getUsers() {
  const res = await fetch(
    "https://apigenerator.dronahq.com/api/9PdhJb9d/users"
  );

  return res.json();
}
export default async function AreaUsersList() {
  const users = await getUsers();
  return (
    <div className="card">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <img
                  src={user.avatar}
                  width="40"
                  height="40"
                  style={{
                    borderRadius: "50%",
                  }}
                  alt={user.name + "'s Avatar"}
                />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.role === "admin" ? (
                  <span className="badge bg-pink-500 textwhite">
                    {user.role}
                  </span>
                ) : (
                  <span className="badge bg-green-500 textwhite">
                    {user.role}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
