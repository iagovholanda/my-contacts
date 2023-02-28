const { v4 } = require('uuid')

let contacts = [
    {
        id: v4(),
        name: "Iago Holanda",
        email: "iagogholand@gmail.com",
        phone: "11223344",
        category: v4(),
    },
    {
        id: v4(),
        name: "Larissa Gabriella",
        email: "iagogholanda@gmail.com",
        phone: "11223344",
        category: v4(),
    }
]

class ContactsRepository {
    findAll() {
        return new Promise((resolve, reject) => resolve(contacts) )
    }

    findById(id) {
        return new Promise((resolve) => resolve(
            contacts.find((contact) => contact.id === id),
        ))
    }

    findByEmail(email) {
        return new Promise((resolve) => resolve(
            contacts.find((contact) => contact.email === email)
        ))
    }

    create(name, email, phone, category_id) {
        return new Promise((resolve, reject) => {
            const newContact = {
                id: v4(),
                name,
                email,
                phone,
                category_id
            }

            contacts.push(newContact)
            resolve(newContact)
        })
    }

    update(id, {name, email, phone, category_id}) {
        return new Promise((resolve, reject) => {
            const updatedContact = {
                id,
                name,
                email,
                phone,
                category_id
            }

            contacts = contacts.map((contact) => (
                contact.id === id ? updatedContact : contact
            ))
            resolve(updatedContact)
        })
    }



    delete(id) {
        return new Promise((resolve) => resolve(
          contacts = contacts.filter((contact) => contact.id !== id),
          resolve()
        ))
    }
}

module.exports = new ContactsRepository()
