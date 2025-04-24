import React from 'react';
import SEO from '../SEO/SEO';

const SupportedDevices = () => {
  return (
    <div className="supported-devices-page min-h-screen">
      <SEO 
        title="Supported Devices | DrugXpert" 
        description="Learn about all devices compatible with DrugXpert including iOS, Android, Windows, Mac, and Linux systems. Check our requirements for optimal performance."
        keywords={['supported devices', 'compatibility', 'iOS devices', 'Android devices', 'desktop compatibility', 'system requirements', 'DrugXpert app']}
      />
      <header className="py-6 to-gray-700 text-gray-800 text-center ">
        <h1 className="text-4xl font-extrabold tracking-tight">📱 Supported Devices</h1>
        <p className="text-lg mt-2 max-w-3xl mx-auto">Learn about all devices compatible with DrugXpert including iOS, Android, Windows, Mac, and Linux systems. Check our requirements for optimal performance.</p>
      </header>
      <main className="py-10 px-6 lg:px-20">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">📱 iOS Devices</h2>
          <img src="/assets/devices/ios-devices.png" alt="iOS Devices" className="w-32 h-32 mb-4 mt-5 rounded" />
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>iPhone SE (2nd generation) and newer</li>
            <li>iPad (5th generation and newer)</li>
            <li>iOS version 14.0 and above</li>
          </ul>
          <p className="mt-4 text-gray-700">Our app is optimized for mobile devices running iOS 14.0 or newer. It leverages features such as Face ID, Touch ID, and ARKit where available. For older models, the app will still function but may lack certain enhancements available on newer hardware. Regular updates from Apple help ensure a secure and reliable experience.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">🤖 Android Devices</h2>
          <img src="/assets/devices/android-devices.png" alt="Android Devices" className="w-32 h-32 mb-4 mt-5 rounded" />
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>Devices with Android 8.0 (Oreo) and above</li>
            <li>Minimum 2GB RAM</li>
            <li>Screen resolution of 720p or higher</li>
          </ul>
          <p className="mt-4 text-gray-700">Please note that due to the wide variety of Android devices, performance may vary depending on the specific hardware and software configuration of your device. Our app is optimized for the most popular Android devices, ensuring compatibility with major manufacturers such as Samsung, Google, OnePlus, and Xiaomi. For the best experience, keep your device updated with the latest Android patches and clear app cache regularly.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">💻 Desktop Systems</h2>

          <h3 className="text-2xl font-semibold mt-4 mb-2">🖥️ Windows</h3>
          <img src="/assets/devices/windows-devices.png" alt="Windows Devices" className="w-32 h-32 mb-4 mt-5 rounded" />
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>Windows 10 and newer</li>
            <li>Minimum 4GB RAM</li>
            <li>Processor: Intel i3 or equivalent and above</li>
          </ul>
          <p className="mt-4 text-gray-700">Ensure your system has the latest Windows updates installed. For the best performance, a dedicated graphics card and SSD storage are recommended.</p>

          <h3 className="text-2xl font-semibold mt-4 mb-2">🍎 Mac</h3>
          <img src="/assets/devices/mac-devices.png" alt="Mac Devices" className="w-32 h-32 mb-4 mt-5 rounded" />
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>macOS 11.0 (Big Sur) and newer</li>
            <li>Devices with Apple Silicon (M1, M2) or Intel processors</li>
            <li>Minimum 4GB RAM</li>
          </ul>
          <p className="mt-4 text-gray-700">Our app is optimized for the latest macOS versions, including support for Apple Silicon chips, ensuring better performance and energy efficiency. Users can also benefit from features like Handoff and iCloud integration for a seamless ecosystem experience.</p>

          <h3 className="text-2xl font-semibold mt-4 mb-2">🐧 Linux</h3>
          <img src="/assets/devices/linux-devices.png" alt="Linux Devices" className="w-32 h-32 mb-4 mt-5 rounded" />
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>Ubuntu 20.04 and newer, Fedora 33 and newer</li>
            <li>Kernel version 5.4 and above</li>
            <li>Minimum 4GB RAM</li>
          </ul>
          <p className="mt-4 text-gray-700">The app supports popular Linux distributions. For installation, ensure that all necessary dependencies are met, and consider using a modern desktop environment like GNOME or KDE for the best experience. Our application also benefits from Linux's stability and flexibility, making it an excellent choice for power users and developers.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">ℹ️ Additional Information</h2>
          <p className="mt-4 text-gray-700">If your device is not listed or you are experiencing issues, please contact our support team for further assistance. We are constantly working to expand our list of supported devices and improve the app experience for all users. Our development team regularly tests the app on new devices and operating systems to ensure compatibility and optimal performance. Feedback from users helps us prioritize support for devices that matter most to our community.</p>
          <p className="mt-4 text-gray-700">Additionally, some features of the app may require specific hardware capabilities, such as GPS, camera, or NFC. If your device lacks these features, certain functionalities might be limited. Make sure to review the app's permissions and system requirements to get the most out of your experience.</p>
          <p className="mt-4 text-gray-700">Regular updates to our app not only introduce new features but also enhance security and compatibility. It is highly recommended to enable automatic updates to ensure you are always running the latest version.</p>
        </section>
      </main>
      
    </div>
  );
};

export default SupportedDevices;
