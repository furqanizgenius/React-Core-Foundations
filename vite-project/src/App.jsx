import Card from './components/Card'

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Karachi, Pakistan"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExIVFRUXFRcXFxUYFRUXFRUVFRUXFxUVFRUYHSggGBolHRcVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy8mHyY3Ly0rLTItMCstLS03MC0tLS0vKy0tKzcvNy8tLS0vNS8rLjUtLS03LzUtLTcyNy0vK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAAAQIHAwQGBf/EAEQQAAECAwQHBwIDBAkEAwAAAAEAAhESIQMxQWEEIjJCcYGhBVFikcHR8AYTFFKxcpPh4gcVIzNTgpKislSDwvEXQ2T/xAAbAQEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EADERAAIBAgMGAwgDAQEAAAAAAAABAgMEBREhEjFBUaHRIjLhBhNSYXGBkfBCscEVFP/aAAwDAQACEQMRAD8A3U901AgdASm/3RwA2b/NAARE3/IUQEaJb+iS1mwvzRldr2SJjDd9OKAP1rsO9UuiJcfZH02eeKECERtfI0QBjpaHoo1stSqwR2vZRpJobkAc2aouVeZqDqo4kUF3mq8Q2fdAA6AlxuyqjNW/HuQAQidr1wojK7XLBASWs2F+aPE13VImMN304o8w2fdAVzoiUX+yNdLQo4ACIvRoBq6/yQEa2Wp4IWxM2HsjSTtXeSEkGAu+RqgK/Wuw70mpLjdkj6bPukBCO968EAYZb8e5QNgZsPdVldr2UBJMDd8hVAHNmqOCrnTUCjzDZu81XACrb/NAGugJTf7qNEt/RVoBETf8wUYY7XsgBbWbC/NH612HehJjDd9OKr6bPPFAY/YOSJ9x3wIgKGy1vwSWOt8ojY712aGMabPTNACZ8oKzbvKKO8PRKQ8XWKAg1M4+iSw1ucOKM8XKKCMa7PSGCAFs1bsFS6aijo7t2Xeq6G7egAdLq/KqBstb8FWw3r1Gx3rs0Aljrc4cFTr5QUMY02ekMVX+HnBAJt3lHggMmcUpDxdY4o3xdUBA2XW+VQtmrcgjGt3yCOju3ZICl01LsUDoavyqOhu35dyCEK7XXJAQCTOKS73OCN8XKKVj4ekEAInygrNHV+UUf4ecFTCFNrrmgAdLS/FQNlreq2G9fn3KNjvXZoAWza3yipM+Shjhd0zVd4eiATbvKKDUzj6JSHi6xRvi5RQD8RkqkGZKoDCaalyTQ1evFVxB2b/JARCBv+QqgJCTOKS73OCNptdapAxju9IcEA28oJNHV5R4Kurs84UQkQgNrrHGqAk0lL8VZZa3o0gbV+dVGgjau80BZZta7+Ck09LkcCatu8lXkHZvyogJNDV5R4q7GcfRfI7T+pNHsAQ509oN1kHOBzNw5leW0764tjSzYxo73Re7lcB5FaJ3FOOjZ3W+G3FfWMdOb0NgS73OHFIT1uWpNJ+oNLftaRacGmQeTILov0q0N9o88XOPqtTvI8EScPZ6o/NNfjPsbpmm1bs+Ck0tL1pZukvFz3jg5w9V29H7c0pmzb2nNxcPJ0QsK8XFGZez1T+M1+Mu5t6WSt+CssdbpwWudB+uNIb/AHjWWoz1XeYp0Xpezfq7R7UgFxsj+V8A3k4U84LfC4py4kdXwq5o6uOa5rX16HoYz5QUm3eUVXGOz0okRCG91jxW4jhGTOKSw1unFG02uUaqAGMTs/IUQFlnrdgpNNS5HAnZuyoq4g7N/kgJNLq9eKsJM0aQBA3/ACFVG02utUBZd7nBTbyh6pAxju9IcFXV2ecKIB+Hz6IsZH5+aIDJzZahA2Im+UUa2WpQtiZhd7IA0zX4JNWXC7NV5muSakuNyAO1Lse9C2Amxv8ANGat+KgbAzYe6ArWzVKjXTUKPE1Qun2v2oyyZ3uOy3v/AILxUqRpxcpPJI9QhKclGK1M+0O0GWDYvMBgN4nuAxXhu2PqC1tYtaTZs/KDrEeJw/QU4ri063faOLnmJ6AdwGAXRtGqv18SlWeUdI9WWaxw+nSylPWXRHSe1cLgu1aNXXeF5pyJyDOEqKlRdCN6CIiyAiIsA+v2J9RW+jGDXTMxs3bP+U3t5UyK2H2J23Y6S0uYYPFXWZ2hnmMwtSr6X09oVva2zfsEtc2ptMLMd57/ANnHzXTQrzi9neiIxLDaFWDqPwtceH3/AHM240T34KB0dXD2UDS4CsSBU3RPfBZF0RKL/ZShSyOdLQcVXNlqEY6WhUa2WpQFDZhN8oo0z3o5sai72VcZrkBJqy4XZqu1Lse/JJqS43IzVvxQGP4g5IuT74RAYNcXUNyF0DAXe6pdNQIHQ1flUAeJdlIUmxUaJL8Ul3sL0BWa20oDEym72uR2vdgqXREuN3kgOHTNJFk0uw/U4ALxemWzrRxc68+QGAGS+p2xpEz5QdVp8zifRfNcxUzFsR99V93F+GPV8+xN2NFU47T3s6L2LrWjF9F7F17Ri4qdQloTPmWjF1LRq+zY6E+0cGMbFx6Zk4Bep7N+lLKyg62AtXd24P8ALvc/JTVnRqVtY7uZ6rYhSt14nry4mvdF0C1tT/Z2b35taSBxNwX1LH6P0x3/ANbW/tPb6ErZzLOECIAC4DAdyrhPcpqNnFLVkVUx+s/JFJfnsaxf9HaYLmNdkHt/8oL5mm9lW9j/AHlk9o7yIt/1CI6rcRdNq/KKB0tDVZlZwe5inj9dPxxTX3Xf+jSSLZ3bP0jYWoLgBZv/ADMFCfEy48oHNeNs/pTSTbfaLYC/7tTZyi9wOJ8N/Kq5Z284vmTVti1vWi23stb0/wB1Ol2N2TaaTafbYM3OOyxvefQYraPZPZtno7BZWYpvOO044uce9OyezLOxsxZ2QgBUk3uJvc496701Jcbl20KCprN7yt4liUrqWzHSC3Ln82R+rsqlsBEX+6NMl+KgbDW+VXQRZWiapUa4uobkc2ao4Kl01AgI5xFBcq4S7KB0ur8qo0SXoCyiE2PzBGa21gpLvYX+Srte7D1QGX2W/Ci4/wAOckQGTgBs35VQQhXa65USSWt+CksdbpwQBtdrrRImMN3pDirGfKHNSbd5RQB9NnnCq4O0LYMsy4bVw74m/wBV2NjOPK5fG7cfrNGUx53fM1H4pcu3tZzW/cvq/wBzN1CG3USPkFqxLVywSC+dKROJnXcxYWeiOe4NaIk/InJdqVfc7F0aRv3CKuuyb/H2UnhlvK6rqHDe/oeK1x7qGfHgc/ZugMsWQbtYnEnCnou2yu1yjRSWOtzhwzV28oc719AhCMIqMVkkQUpOT2pbyRMYbvSGFUdTZ6VSbd5R4ZKxkzjyXo8hwGF/yNEaAdq/OikkutflxVlmrcgI0k7V2dKoYxps9M6qzT0uxUmhq9eKArqbPOFUgIR3useCQkzjySTe5wQBtdrlGigJjA7PTKqsJ8oc0mjq9eCAjojZuyrVVwA2b8qpNJS/FSSWt6ArYQrf8hRRtdrrRWWbWuy4JGfLqgJExhu9IcUdTZ5wqrNu8o8U2M48rkBjM/PyRZfiMuqICNjvXZoQY0u6ZoHTUuQuhq/KoCu8PSiUh4useKESZxSXe5wQBlNrlGq872i+No7jDyovRN176QXmNI23ftH9VWvaaeVGEeb/AKXqdtkvE2caIiphJGVlZzOA7yB5r09m2G1dgvg9lsjat5nyBX3g+YwNMVc/ZmklRnU4t5fhepG3svEkUxjTZ6Qxoq7w84UUmhq8vNU6l1Y+ispxCkPF1jjVcdpaStc5wiQCQDjARhFcku9zhxXBpmtZvPcx3/ErK3mHuPHt+v8Av0ckd33f5EP1/wB2jkf93+ReJaq0VEbvRWd4dbfD1fcryvq/xdF2PbO/pAGGjQ4Wv8iD+kAf9NE9/wB2v/BeNtYQwjy9FwrEcPtn/Hq+56d7XX8ui7Ht2/X/AH6PHja/yJ/8gf8A56d33af8F4hF7WG23w9X3M/+2v8AF0R7d39IHdo0OFr/ACIf6QB/01e/7tf+C8QovX/Mtfh6vueleVufRHubL6/EQHaPiIk2kYDv2F7VoIOtdmtIOuW7NHtJ2tji0HoonFLWnQ2XTWWef+HfZ1p1M9p8jMg4XfIqu8PSihdLq/KqkSZqJO4Uh4useKMptco1SXe5oNe+kPVAZTMy8kU/DjvRARzgaC/yQGAgb0c2WoQNiJjf7ICM1dr3SBjHD04I0zXoXVlwuQB+ts+y8zbiDnftH9V6d+rdivOdoNhaOzMfMR9VWfaaOdGEuTy/K9Dtsn4mjroiKmkkdns4/wBoOf6FfccY7PsvPaPaSua7uIPLFemcA0RGKuns1VToThxTz/K9CNvY+JM4yYCGPyFUaYCvuuUNBE2PSijBNfgrIcRxVFd304Lh04RY+Fwa79Cu0DWXC5cWnCDHgCMWOzMYFZjvRiW402yg+fO9U+nouwOzNIh/cW37q09k/qzSP8C2/dWnsrhtR5oqyUuR1yP090PpH9VzjszSP8C2/dWnsn9WaR/gW37q09kUo80ekpcjgN3zzXGV3P6s0j/Atv3Vp7LqOaQYEQIoQaEEYELbBrgzLT4oiiqi2hEdct2WGw1ovDW9AtM6JYz2jGfme1v+pwHqt1PbLUKBxqXkX1/wlMOXmf0DSAIG9Rmrte6rWxETeowzXqCJMEGMcPTgj9bZ9kLqy4XKv1bsUBh9p3wor985IgK1stT0QtiZsPZGknau8kJIMBd8jVAVxnuw70mpLjdkjxDZ90gIR3vXggIzUvx7l8btuyg4OwcP0/8Aa+0yu1ywXS7Tsi5hH5ajl/BRuLWzr2koretV9vQ3W89iomfBikVjFQuXzrImM0ZRX3ex9JBbW9tM4YFedL1dH0w2bg4V7x3jEKVwm6drXUn5Xo/p6HLc7M45Hry2Jmwvzoq7Xuw71waLpQtGgsMWHp3g9xXO+mzzxX0GMlJZrcRYmpLjdlRGmW/okBCO968EYI7XssggbDWN3ujmzVCAkmBu+QqjiRs3eaArnTUHGqB0BLj0qjgBs3+dFx29sxjDaWjg0NESTSELqeSBvLVnQ+oO0vwtg98RMRKwd7zdyF/JalJX1vqTtt2lWs1QxtGN7hi45n2C+QrLh1H3MNd739ivXdyq09Ny3BERSqZzpn3fonRZ9LYSKWYLzyEG/wC4g8ltBrZaleW/o97NDbF1q6+0NI/kbEDzM3RepaSdq7yVVxOt7yu8ty0/fuT1lT2aSz46gtm1hd7KuM13VRxIMBd8jVV4hs+6jzrE1JcbskbqX49yQEI73rwRldrlggL+IHcVU+2z4UQGJdNS7FJoavXijobt+SCEK7XXJAQCTOKS73OCM8XVKx8PSCAHXygrNHV5R4KP8POCphCm11jigPNdq6KbN8MDUeo5L57nL1mm6KLRha4wde0nA+y8fpDS1xa4QIvCpGJ4b7is5RXhlu+Xy/eB2RuPDqR9ouva2ixtLRda1tFpo0DguLnJHa0PtV9i6Zhv2mm5wz916zsf6gsbWgMrzuOMD/lO9+uS17a2i6dq5WKxnOktlbuRCzxGVKXNG5JYa3OHFCJ8oLVOhfUmlWVG2pLfyv1xwrUDgV9Wy+vLcX2VmeEzfUqXVVM3Qxq3fmzXX+jYU02r8ogdLS9a+tfr223bGzae8lx9Qvl6d9U6Xa0NrKO5gl/3bXVZU0zM8Ztl5c39u5sLtTtqw0Wto8F0KWbavPLAZmAWu/qD6gtNKdXVswYtswacXHeK+QTExNSbzieKLut8k8yKuMSqV9N0eXcIiKapVDnjILvdjdnO0i1bZi41cfysG0fTiQum1pJAAJJMABeSbgB3rZ/0n2H+Gs4vGu+BecB+VgPcOp5L3dXio081ve7uSFnRdaeXBbz7NjYCVrWiVrQGgdwAouQumpco+O7dl3quhu35KrljAdLq/KqASZqthCt/yCjPF1QCXe5wVOvlD1UrHw9II/w84IB+HzRTXzRAZFktb0ljrfKKNBG1d5oQSYi75GiAAz5QSbd5RVfXZ9kiIQ3vXigB1M4pLDW5w4oym1yxUAMYnZ+QogKGz1uwXzO2OzRbikBaAUOB8LvfBfSeI7N3kq4g0F/ktdWlCrFwmtAa10prmOLXAhwvBwXStHrY3a3ZNnbtg+jxsvF4yPeMv0Xgu2uyLbRzrt1cHirTzwORUNKwdJ6aoiL2E4LPgfLtHLrPcuR7lwlddKGRXK1TMiIi3nKRERekZRURF2UpGyLCrWkkAAkmgAqSTcAMSu32Z2Za27pbJhPe65rf2nYcL1sT6d+mLPRoPOvaYvIo0Yhgw43/AKLuVyoL5knZ2dSu9NFz/d50/o/6W+3/AGtr/e7rbxZg/q79F6maOr14I+uz7KkiEBf8jVcVSpKpLakWejRjSjsxBdLS/FC2Wt6NIG1f50UaCNq7zWs2lDZtb5RAZ8lHAmou+Roq8x2fZASbd5R4qnUzj6JEQhvevFGU2uWKAn4jJFnOz4EQGDXTUKF0NXD3Vc6agQOgJTf7oA4S3dUlpNjfkowS3pLWbC9AVuvfh3KB0TLhdnRH612CpdES4+yAjnS0HVVzZahGOloVGtlqbkBWtmqVjtxa4CELsDkYqubMYi5VzpqBAeY7W+jbC0cftk2TsqsMfCbuRHBeY7Q+j9Ks7mi0Hew1/wBJgfKK2cHQEuN3mozVvxXh04kdXwu3q65ZP5djS+kaLaM22PZ+00t/ULhit3S7xu91wWuhWb6/bYeLG+y8+6I6WA/DPp6mmFnYWLnmDGuce5oJPRbkboVjc2yYD+w0foFzsIYIQ8kVMRwF8Z9PU1Zon0ppb6/akHe8y/7drovUdlfQtk0TWzzaH8o1Wc8T5herY2WpQtiZhd7LYlkd9DCbenq1tP59jj0WwaGhjWhjW3BoAA5LkmrLhdmq8zXYJNSXG5ZJNLLREcZbse9UtgJsfdGGW/FQNgZsPdAVrZqlRrpqFHNmqFXOmoEBC6XVF3uq4S3dUa6AlN/uowS3oCy0mxvyRuvfh3KFtZsL1X612CAv4cZqri+wUQGbgBVt/mgAIib/AJCigZLW9C2Ot8ogDTHa9kjWGHpxVJnygk27yQEfq7PuqQAIi/5Gig1M4pLDW5+aArQDteyjSTQ3IWz1uwVLpqICOMKC5V4A2fdA6XVUDZK3oCgCEcfkKKM1trlgksdbn5KnXyh6oCRMYYenFHmXZ91Zt3lHggMmcUAcABEXo0A1N/koGy63yqFs1UAYY0dd5ISQYC75GqpdNS7FA6Gr8qgD9XZ90gIRx9eCgEmcUl3uaArNba9lAYmBu+QqhE+UFZo6vyiAjzCjbvNVwAq2/wA0DpaX4qBktUBWgERN6jDNteyFs2t8oqTPkgJExhh6cUfq7PurNu8o8UGpnH0QGH3XfAi5PxA7kQGLY712fehjGmz0zVmmpck0NXrxQB/h6JSHi6xSEmcVJd7nBAVni5RUEY12ekME28oKzR1eUeCAj47t2Srobt+STSUvxSWWt6ANhvXqNjvXZqyza138EmnpcgIYxps9IYqv8POCTQ1eUeKbGcfRAKQ8XWOKM8XVJd7nDikJ8oICCMa3dMkdHduyVmm1evBJpaXoA6G7fl3IIQrtdcklkrfgksdbpwQEZ4uUUrHw9IKxnygk27yigI/w84KmEKbXXNIyZxSWGt04oA2G9fn3KNjvXZqyz1uwUnmpcgDo4XdM1X+HopNLq9eKsJM0ApDxdYozxcopLvc4cE28oeqAygzLzRY/h8+iIDDR7+StrteSIgMtJwVGxyVRAY6LisWbfMoiAaTfyXJb7KIgFhs+a49Gv5IiAO2+YWWlYc0RAV2xyCaNcURAcdjteaukX8kRAZ6TdzVs9jzREBho2Km/zREBdJwWdpscgiICaNdzXHo96IgLbbXks9JuCIgKNjksdFx5IiA50REB/9k=",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "NY, USA"
    },
    {
      brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA"
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Lahore, Pakistan"
    }
  ];

  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} />
        </div>
      })}
    </div>
  )
}

export default App