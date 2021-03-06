/*
 * Copyright (c) 2013 BlackBerry Limited
 * Author: Isaac Gordezky
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#ifndef APPLICATIONTHREAD_HPP_
#define APPLICATIONTHREAD_HPP_

#include <QThread>
#include <QObject>
#include <QCoreApplication>

namespace bb {
class Application;
namespace webworks {
namespace extensions {

class ApplicationThread: public QThread {
	Q_OBJECT
public:
	explicit ApplicationThread(QThread::Priority priority, QObject *parent =
			NULL);
	virtual ~ApplicationThread();

	virtual void run();

	void join(QByteArray);

	bb::Application *app;
};

} /* namespace extensions */
} /* namespace webworks */
} /* namespace bb */
#endif /* APPLICATIONTHREAD_HPP_ */
