function findMatching(source, sought) {
    return source.filter(
        (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
    );
}

function fuzzyMatch(source, sought) {
    return source.filter(
        (possibleMatch) => possibleMatch[0] === sought[0]
    );
}

function matchName(source, sought) {
    return source.filter(
        (possibleMatch) => possibleMatch.name === sought
    );
}