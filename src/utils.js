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
export const adminOps = (query) => {
    const authToken = localStorage.getItem("authToken");
    const adminOpsUrl = new URL(`${domain}/update/`);
    adminOpsUrl.searchParams.append("ordernum", query.ordernum);
    adminOpsUrl.searchParams.append("orderstatus", query.order_status);
 
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
