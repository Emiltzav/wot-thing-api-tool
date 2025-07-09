# Setup code
import sys, os
sys.path.insert(0, os.path.abspath('..')) 
# Setup code

from fastapi import FastAPI
from Backend.routers import routes
app = FastAPI()


app.include_router(routes.router)

