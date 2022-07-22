App = function(clusterID) {
  // Keep this website online
  alert("This website is hosted by CloudWake. If you see any problems, report them to our website immediately.")
  i = setInterval(function() {
    console.log(`[CloudWake] server on ${Math.random()} ms`)
      }, 2000)
}
