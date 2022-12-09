const client = require('../services/astra-db-client')();

const fetchDonations = async ()=>{

    const fetchDonationsQuery = "SELECT * FROM donations_by_user";
    const donations = await(await client).execute(fetchDonationsQuery);
    return donations;

}

const addDonation = async (email, image, name, price, description, quantity, spotsleft)=>{

    const addDonationQuery = "INSERT INTO donations_by_user(id, email,image, name, price, description, quantity, spotsleft) VALUES(now(), ?,?,?,?,?,?,?)";
    await (await client).execute(addDonationQuery, [email, image, name, price, description, quantity,spotsleft]);

}


const updateDonation = async (email, id, spotsleft)=>{
    const updateDonationQuery = `UPDATE donations_by_user SET spotsleft ='${spotsleft}'  WHERE email = '${email}' AND id = ${id}`;
    await(await client).execute(updateDonationQuery);
}

module.exports ={
    fetchDonations,
    addDonation,
    updateDonation,
}