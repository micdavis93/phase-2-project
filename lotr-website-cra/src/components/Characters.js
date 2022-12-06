import Character from "./Character"

export default function Characters({characters}) {

    // console.log(characters)

    return (
        <table className="ui celled striped padded table">
            <tbody>
                <tr>
                    <th>
                        <h3>Name</h3>
                    </th>
                    <th>
                        <h3>Height</h3>
                    </th>
                    <th>
                        <h3>Culture</h3>
                    </th>
                    <th>
                        <h3>Gender</h3>
                    </th>
                    <th>
                        <h3>Spouse</h3>
                    </th>
                    <th>
                        <h3>Birth</h3>
                    </th>
                    <th>
                        <h3>Death</h3>
                    </th>
                </tr>
                {characters.map((character) => {
                    return (/\d/.test(character.height)) ? <Character key={character.id} character={character} /> : ""
                })}
            </tbody>
        </table>
    )
}