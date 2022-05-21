const domain = ""

//admin side list all orders (return multiple packages)
export const adminStatus = () => {
    const authToken = localStorage.getItem("authToken");
    const adminPackagesUrl = `${domain}/history/admin`;
   
    return fetch(adminPackagesUrl, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then((response) => {
      if (response.status !== 200) {
        throw Error("Fail to get admin package list");
      }
   
      return response.json();
    });
};
 
 
//admin side operations
export const adminOps = (id, status) => {
    const authToken = localStorage.getItem("authToken");
    const adminOpsUrl = new URL(`${domain}/orders/update/`);
    adminOpsUrl.searchParams.append("order_ID", id);
    adminOpsUrl.searchParams.append("order_status", status);
 
    return fetch(adminOpsUrl, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    }).then((response) => {
            if (response.status !== 200) {
              throw Error("Fail to operate package status");
            }
         
        return response.json();
    });
}
