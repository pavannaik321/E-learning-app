import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/cluzcwpyb12x207wb99fpywoc/master"

export const getCourseList = async (level) => {
  const query = gql`
    query MyQuery {
        courses(where: {level: ${level}}) {
          id
          name
          price
          level
          tags
          time
          author
          banner {
            url
          }
          chapters {
            content {
              heading
              description {
                markdown
                html
              }
              output {
                markdown
                html
              }
            }
            title
            id
          }
          description {
            markdown
          }
        }
      }
    `
  const result = await request(MASTER_URL, query)
  return result
}

export const enrollCourse=async(courseId,userEmail)=>{
  console.log("called enrollCourse")
  const mutationQuery=gql`
  mutation MyMutation {
    createUserEnrolledCourse(
      data: {courseId: "${courseId}", userEmail: "${userEmail}", course: {connect: {id: "${courseId}"}}}
    ) {
      id
    }
    publishManyUserEnrolledCoursesConnection(to: PUBLISHED) {
      edges {
        node {
          id
        }
      }
    }
  }
  `

  const result = await request(MASTER_URL, mutationQuery)
  return result
}

export const getUserEnrolledCourse=async(courseId,userEmail)=>{
  console.log("called getUserEnrolledCourse")
  const query = gql`
  query GetUserEnrolledCourse {
    userEnrolledCourses(
      where: {courseId: "${courseId}", userEmail: "${userEmail}"}
    ) {
      id
      courseId
      completedChapter {
        chapterId
      }
    }
  }
  `
  const result = await request(MASTER_URL, query)
  return result
}

export const MarkChapterCompleted=async(chapterId,recordId)=>{
  const mutationQuery=gql`
  mutation markChapterCompleted {
    updateUserEnrolledCourse(
      data: {completedChapter: {create: {data: {chapterId: "${chapterId}"}}}}
      where: {id: "${recordId}"}
    ) {
      id
    }
    publishManyUserEnrolledCoursesConnection {
      edges {
        node {
          id
        }
      }
    }
  }
  `
  const result = await request(MASTER_URL, mutationQuery)
  return result
}