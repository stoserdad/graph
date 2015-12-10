import tornado.httpserver
import tornado.ioloop
import tornado.web
import tornado.options
import requests
import os


class MainHandler(tornado.web.RequestHandler):
	def get(self):
		self.render('index.html', messages=None)


class DataHandler(tornado.web.RequestHandler):
	def get(self):
		self.write(requests.get('http://levin.omnicomm.ru/search/graphdata').json())


class Application(tornado.web.Application):
	def __init__(self):
		handlers = [
			(r'/', MainHandler),
			(r'/src/(.*)', tornado.web.StaticFileHandler, {'path': 'src/'}),
			(r'/data', DataHandler)]
		settings = dict(
			debug=True,
			template_path=os.path.join(os.path.dirname(__file__)),
			static_path=os.path.join(os.path.dirname(__file__), 'src')
		)
		tornado.web.Application.__init__(self, handlers, **settings)


application = Application()

if __name__ == "__main__":
	application.listen(8012)
	tornado.ioloop.IOLoop.current().start()
