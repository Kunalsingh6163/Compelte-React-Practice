const contentData = [
    {
      id: "cmt1",
      content: "This is the first comment.",
      timestamp: "2025-03-25T10:15:30Z",
    },
    {
      id: "cmt2",
      content: "Great article! Really helped me understand useEffect better.",
      timestamp: "2025-03-25T10:17:45Z",
    },
    {
      id: "cmt3",
      content: "Can someone explain why we need keys in lists?",
      timestamp: "2025-03-25T10:20:00Z",
    },
    {
      id: "cmt4",
      content: "I found a bug in the code snippet shared above.",
      timestamp: "2025-03-25T10:22:10Z",
    },
  ];
  function ContentList() {
    return (
      <div>
        <h1>Comments</h1>
        <table>
          <thead>
            <tr>
              <th>Comment ID</th>
              <th>Comment</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {contentData.map((item, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.content}</td>
                    <td>{item.timestamp}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ContentList;
;
  