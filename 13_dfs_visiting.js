// This problem was asked by Airbnb.

// We're given a hashmap associating each courseId key with a list of courseIds values, which represents that the prerequisites of courseId are courseIds. Return a sorted ordering of courses such that we can finish all courses.

// Return null if there is no such ordering.

// For example, given {'CSC300': ['CSC100', 'CSC200'], 'CSC200': ['CSC100'], 'CSC100': []}, should return ['CSC100', 'CSC200', 'CSCS300'].

function getCourseOrder() {
  const courses = {
    CSC300: ["CSC100", "CSC200"],
    CSC200: ["CSC100"],
    CSC100: []
  }

  const visited = new Set()
  const visiting = new Set()
  const order = []

  function dfs(course) {//300
    if (visiting.has(course)) return false // ciclo
    if (visited.has(course)) return true

    visiting.add(course)

    for (const prereq of courses[course]) {
      if (!dfs(prereq)) return false
    }

    visiting.delete(course)
    visited.add(course)
    order.push(course)
    return true
  }

  for (const course in courses) {
    if (!dfs(course)) return null
  }

  return order.reverse()
}

console.log(getCourseOrder())
