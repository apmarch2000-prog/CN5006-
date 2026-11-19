
async function findByCity() {

    const docs = await Person.find({
        city: "London"
    });

    console.log(docs);
}
