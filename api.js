App = function(clusterID) {
  // Keep this website online
  alert("This website is hosted by CloudWake. If you see any problems, report them to our website immediately.")
  i = setInterval(function() {
    console.log(`[CloudWake] server on ${Math.random()} ms`)
    if (clusterID.includes('?log-once')){
      clearInterval(i)
    }
      }, 2000)
}

Badge = function(app) {
  document.body.insertAdjacentHTML("beforeend", "<div class='cloudwake-bdge' style='bottom: 5px; position: fixed;'>This website is maintained and hosted by CloudWake.</div>")
  if (document.getElementById('cloudwake-server') != null) {
    console.log("Connected Badge on server: cloud://")
  } else{ console.log("Error connecting Badge on server: cloud://") }
}

Verify = function(app) {
  console.log("Verifying on socket: cloud://")
  console.log("Please go back to your control panel and click I verified!")
}
